// This import is only included in the server build, because it's only used by getServerSideProps
import { getSession } from "@auth0/nextjs-auth0";
import Layout from "../../components/layout";

function Profile({ user }) {
  return (
    <Layout user={user}>
      <h1>Profile</h1>

      <div>
        <h3>Profile (server rendered)</h3>
        <img src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  // Here you can check authentication status directly before rendering the page,
  // however the page would be a serverless function, which is more expensive and
  // slower than a static page with client side authentication
  const session = await getSession(req);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/auth/login",
    });
    res.end();
    return;
  }

  return { props: { user: session.user } };
}

export default Profile;
