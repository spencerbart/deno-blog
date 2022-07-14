import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.1/blog.tsx";

blog({
  title: "Spencer's Blog",
  description: "A blog about technology",
  avatar: "./spencer.jpg",
  avatarClass: "rounded-full",
  author: "Spencer Bartholomew",
  links: [
    { title: "Website", url: "https://spencerbartholomew.com" },
    { title: "GitHub", url: "https://github.com/spencerbart" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/spencerbart/" },
  ],
  favicon: "./favicon.ico",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
