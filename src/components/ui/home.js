import React from "react";

const Home = () => {
  return (
    <div>
      You can start using Material-UI with minimal Front-end infrastructure,
      which is great for prototyping. Two Universal Module Definition (UMD)
      files are provided: one for development:
      https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js
      one for production:
      https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js
      You can follow this CDN example to quickly get started. ⚠️ Using this
      approach in production is discouraged though - the client has to download
      the entire library, regardless of which components are actually used,
      affecting performance and bandwidth utilization. ⚠️ The UMD links are
      using the latest tag to point to the latest version of the library. This
      pointer is unstable, it shifts as we release new versions. You should
      consider pointing to a specific version, such as v4.4.0.
    </div>
  );
};

export default Home;
