import myImage from "./assets/Legacy.png"; // Ensure the path is correct

function Legacy() {
  return (
    <div className="legacy-content-section">
      <div className="legacy-content-header">
        <h2>
          Insurance, retirement, and investing. That’s what we do. People
          helping people. That’s who we are. Mutuality is the principle that’s
          guided us since the beginning.
        </h2>
      </div>
      <div className="legacy-content-body">
        <div className="legacy-text-content">
          <h1>A Legacy of Mutuality</h1>
          <p>
            MassMutual is a mutual company. That means we don't have
            shareholders. And we're not in business to satisfy Wall Street
            analysts. We operate for the benefit of our members, policyowners,
            and customers. By putting their long-term interests first, we've
            shown that looking out for each other pays off, time and again. The
            proof is in our financial strength ratings – among the highest of
            any company in any industry.
          </p>
        </div>
        <div className="legacy-image-content">
          <img src={myImage} alt="Historical MassMutual building" />
        </div>
      </div>
    </div>
  );
}

export default Legacy;
