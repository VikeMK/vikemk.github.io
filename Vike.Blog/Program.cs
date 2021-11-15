using Statiq.App;
using Statiq.Common;
using Statiq.Web;

await Bootstrapper.Factory
    .CreateWeb(args)
    .DeployToGitHubPages(
        "VikeMK",
        "blog",
        Config.FromSetting<string>("GITHUB_TOKEN"))
    .RunAsync();