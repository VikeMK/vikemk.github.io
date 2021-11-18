using Statiq.App;
using Statiq.Common;
using Statiq.Core;
using Statiq.Web;
using Statiq.Web.Pipelines;

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
        };
    }
}

public class FaviconPipeline : Pipeline
{
    public FaviconPipeline()
    {
        Dependencies.Add(nameof(Inputs));
        InputModules = new() { new ReadFiles("assets/favicon/favicon.ico") };
        ProcessModules = new() { new SetDestination("favicon.ico") };
        OutputModules = new() { new WriteFiles() };
    }
}