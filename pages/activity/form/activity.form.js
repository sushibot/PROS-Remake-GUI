import Layout from "../../../components/layout";
import { useFetchUser } from "../../../lib/user";
import styles from "./Activity.module.css";
function ActivityForm() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>Create Activity</h1>
      <form>
        <div className={styles.container}>
          <section>
            <label>UserName</label>
          </section>
          <section>
            <input type="text" aria-label="username" required></input>
          </section>
        </div>
      </form>
    </Layout>
  );
}

export default ActivityForm;
