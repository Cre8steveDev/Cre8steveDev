const SocialLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center p-1">
      {/* Twitter */}
      <a
        href="https://twitter.com/Cre8steveDev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="icons/twitter.png"
          alt="Twitter"
          title="Check My Tweets"
          className="w-[50px] hover:opacity-85 hover:scale-110 ease-in transition active:scale-50"
        />
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/Cr8steveDesign"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="icons/github.png"
          alt="GitHub"
          title="My Code Repo"
          className="w-[50px] hover:opacity-85 hover:scale-110 ease-in transition active:scale-50"
        />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/stephen-omoregie/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="icons/linkedin.png"
          alt="Twitter"
          title="Let's Connect"
          className="w-[50px] hover:opacity-85 hover:scale-110 ease-in transition active:scale-50"
        />
      </a>
      {/* WhatsApp */}
      <a href="https://wa.link/a7mhni" target="_blank" rel="noreferrer">
        <img
          src="icons/twitter.png"
          alt="Twitter"
          title="Say Hi"
          className="w-[50px] hover:opacity-85 hover:scale-110 ease-in transition active:scale-50"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
