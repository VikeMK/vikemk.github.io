using Statiq.App;
using Statiq.Common;
using Statiq.Core;
using Statiq.Web;

await Bootstrapper.Factory
    .CreateWeb(args)
    .DeployToGitHubPages(
        "VikeMK",
        "vikemk.github.io",
        Config.FromSetting<string>("GITHUB_TOKEN"))
    .RunAsync();

public class AdditionalAssetsPipeline : Pipeline
{
    public AdditionalAssetsPipeline()
    {
        Isolated = true;
        ProcessModules = new ModuleList { new CopyFiles("./CNAME", "CNAME") };
    }
}