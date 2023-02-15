import type { Repo } from "~/types";
export default defineEventHandler(async () => {
  const data = await $fetch<Repo[]>(
    "https://api.github.com/users/printfCYQ/repos?per_page=100&type=owner&sort=updated"
  );
  const publicRepos = data.filter((repo) => !repo.private && !repo.archived);
  const publicAndNotForkRepos = publicRepos.filter((repo) => !repo.fork);

  const repoGroups: Record<string, Repo[]> = {
    HTML: filterRepos(publicAndNotForkRepos, "html"),
    CSS: filterRepos(publicAndNotForkRepos, "css"),
    Javascript: filterRepos(publicAndNotForkRepos, "javascript"),
    Vue: filterRepos(publicAndNotForkRepos, "vue"),
    Config: filterRepos(publicAndNotForkRepos, "config"),
    Typescript: filterRepos(publicAndNotForkRepos, "typescript"),
    Templates: filterRepos(publicAndNotForkRepos, "template"),
    nodejs: filterRepos(publicAndNotForkRepos, "nodejs"),
    All: publicAndNotForkRepos,
  };

  return repoGroups;
  // return groupBy(publicAndNotForkRepos, "language");
});

function groupBy(objectArray, property): Record<string, Repo[]> {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property] ?? "Other";
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

function filterRepos(repos: Repo[], key: string) {
  return repos.filter((repo) => repo.topics && repo.topics.includes(key));
}
