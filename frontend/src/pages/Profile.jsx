// Profile.jsx

const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mt-5">User Profile</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text">Name: John Doe</p>
              <p className="card-text">Email: johndoe@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
