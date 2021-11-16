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
        ProcessModules = new ModuleList
        {
            new CopyFiles("./CNAME", "CNAME"),
            new CopyFiles("./assets/favicon/favicon.ico", "favicon.ico"),
        };
    }
}

public class FaviconPipeline : Pipeline
{
    public FaviconPipeline()
    {
        InputModules = new() { new ExecuteConfig(Config.FromContext(_ => new ReadFiles("assets/favicon/favicon.ico"))) };
        ProcessModules = new() { new SetDestination("favicon.ico") };
        OutputModules = new() { new WriteFiles() };
    }
}