import { useEffect, useState } from "react";
import { getUserProfile, authInitialProps } from "../lib/auth";
import Layout from "../components/Layout";

function Profile(props) {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    getUserProfile().then((user) => setUserProfile(user));
  }, []);

  if (!userProfile) {
    return (
      <Layout pageTitle="..." docTitle="..." userFullName="..." {...props}>
        <p>Loading profile...</p>
      </Layout>
    );
  }

  return (
    <Layout
      pageTitle={`${userProfile.user.name} profile`}
      docTitle={`${userProfile.user.name} profile`}
      userFullName={userProfile.user.name}
      {...props}
    >
      <pre>{JSON.stringify(userProfile, null, 2)}</pre>
    </Layout>
  );
}

Profile.getInitialProps = authInitialProps(true);

export default Profile;
