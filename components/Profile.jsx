import PromptCard from "./PromptCard";

const Profile = ({ name, description, data, handleDelete, handleEdit }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">
        <span >
          {name} {" "}
        </span>
        Profile
      </h1>
      <p className="desc text-left">
        {description}
      </p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))
        }
      </div>
    </section>
  );
};

export default Profile;