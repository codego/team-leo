const { signer } = require('x-hub-signature');
const sign = signer({ algorithm: 'sha1', secret: 'GERALDINE' });
const payload = {
    "ref": "refs/heads/COR-123/nombre",
    "before": "635d04088a6bfade9becff18ff244612a2fb3135",
    "after": "3ec7e81c5b2b0833519636b82fb7df7a64f61b8d",
    "repository": {
      "id": 294952519,
      "node_id": "MDEwOlJlcG9zaXRvcnkyOTQ5NTI1MTk=",
      "name": "team-leo",
      "full_name": "codego/team-leo",
      "private": false,
      "owner": {
        "name": "codego",
        "email": "joacoditoma@gmail.com",
        "login": "codego",
        "id": 1633163,
        "node_id": "MDQ6VXNlcjE2MzMxNjM=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/1633163?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/codego",
        "html_url": "https://github.com/codego",
        "followers_url": "https://api.github.com/users/codego/followers",
        "following_url": "https://api.github.com/users/codego/following{/other_user}",
        "gists_url": "https://api.github.com/users/codego/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/codego/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/codego/subscriptions",
        "organizations_url": "https://api.github.com/users/codego/orgs",
        "repos_url": "https://api.github.com/users/codego/repos",
        "events_url": "https://api.github.com/users/codego/events{/privacy}",
        "received_events_url": "https://api.github.com/users/codego/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/codego/team-leo",
      "description": "Hackathon",
      "fork": false,
      "url": "https://github.com/codego/team-leo",
      "forks_url": "https://api.github.com/repos/codego/team-leo/forks",
      "keys_url": "https://api.github.com/repos/codego/team-leo/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/codego/team-leo/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/codego/team-leo/teams",
      "hooks_url": "https://api.github.com/repos/codego/team-leo/hooks",
      "issue_events_url": "https://api.github.com/repos/codego/team-leo/issues/events{/number}",
      "events_url": "https://api.github.com/repos/codego/team-leo/events",
      "assignees_url": "https://api.github.com/repos/codego/team-leo/assignees{/user}",
      "branches_url": "https://api.github.com/repos/codego/team-leo/branches{/branch}",
      "tags_url": "https://api.github.com/repos/codego/team-leo/tags",
      "blobs_url": "https://api.github.com/repos/codego/team-leo/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/codego/team-leo/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/codego/team-leo/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/codego/team-leo/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/codego/team-leo/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/codego/team-leo/languages",
      "stargazers_url": "https://api.github.com/repos/codego/team-leo/stargazers",
      "contributors_url": "https://api.github.com/repos/codego/team-leo/contributors",
      "subscribers_url": "https://api.github.com/repos/codego/team-leo/subscribers",
      "subscription_url": "https://api.github.com/repos/codego/team-leo/subscription",
      "commits_url": "https://api.github.com/repos/codego/team-leo/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/codego/team-leo/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/codego/team-leo/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/codego/team-leo/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/codego/team-leo/contents/{+path}",
      "compare_url": "https://api.github.com/repos/codego/team-leo/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/codego/team-leo/merges",
      "archive_url": "https://api.github.com/repos/codego/team-leo/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/codego/team-leo/downloads",
      "issues_url": "https://api.github.com/repos/codego/team-leo/issues{/number}",
      "pulls_url": "https://api.github.com/repos/codego/team-leo/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/codego/team-leo/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/codego/team-leo/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/codego/team-leo/labels{/name}",
      "releases_url": "https://api.github.com/repos/codego/team-leo/releases{/id}",
      "deployments_url": "https://api.github.com/repos/codego/team-leo/deployments",
      "created_at": 1599918433,
      "updated_at": "2020-09-12T13:57:55Z",
      "pushed_at": 1599921779,
      "git_url": "git://github.com/codego/team-leo.git",
      "ssh_url": "git@github.com:codego/team-leo.git",
      "clone_url": "https://github.com/codego/team-leo.git",
      "svn_url": "https://github.com/codego/team-leo",
      "homepage": null,
      "size": 0,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 2,
      "license": null,
      "forks": 0,
      "open_issues": 2,
      "watchers": 0,
      "default_branch": "master",
      "stargazers": 0,
      "master_branch": "master"
    },
    "pusher": {
      "name": "codego",
      "email": "joacoditoma@gmail.com"
    },
    "sender": {
      "login": "codego",
      "id": 1633163,
      "node_id": "MDQ6VXNlcjE2MzMxNjM=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/1633163?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/codego",
      "html_url": "https://github.com/codego",
      "followers_url": "https://api.github.com/users/codego/followers",
      "following_url": "https://api.github.com/users/codego/following{/other_user}",
      "gists_url": "https://api.github.com/users/codego/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/codego/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/codego/subscriptions",
      "organizations_url": "https://api.github.com/users/codego/orgs",
      "repos_url": "https://api.github.com/users/codego/repos",
      "events_url": "https://api.github.com/users/codego/events{/privacy}",
      "received_events_url": "https://api.github.com/users/codego/received_events",
      "type": "User",
      "site_admin": false
    },
    "created": false,
    "deleted": false,
    "forced": false,
    "base_ref": null,
    "compare": "https://github.com/codego/team-leo/compare/635d04088a6b...3ec7e81c5b2b",
    "commits": [
      {
        "id": "3ec7e81c5b2b0833519636b82fb7df7a64f61b8d",
        "tree_id": "a9c7ca5b58f68e9b7209d73186e159f0f5ba6378",
        "distinct": true,
        "message": "a",
        "timestamp": "2020-09-12T11:42:51-03:00",
        "url": "https://github.com/codego/team-leo/commit/3ec7e81c5b2b0833519636b82fb7df7a64f61b8d",
        "author": {
          "name": "codego",
          "email": "joacoditoma@gmail.com",
          "username": "codego"
        },
        "committer": {
          "name": "codego",
          "email": "joacoditoma@gmail.com",
          "username": "codego"
        },
        "added": [
  
        ],
        "removed": [
  
        ],
        "modified": [
          "index.js"
        ]
      }
    ],
    "head_commit": {
      "id": "3ec7e81c5b2b0833519636b82fb7df7a64f61b8d",
      "tree_id": "a9c7ca5b58f68e9b7209d73186e159f0f5ba6378",
      "distinct": true,
      "message": "a",
      "timestamp": "2020-09-12T11:42:51-03:00",
      "url": "https://github.com/codego/team-leo/commit/3ec7e81c5b2b0833519636b82fb7df7a64f61b8d",
      "author": {
        "name": "codego",
        "email": "joacoditoma@gmail.com",
        "username": "codego"
      },
      "committer": {
        "name": "codego",
        "email": "joacoditoma@gmail.com",
        "username": "codego"
      },
      "added": [
  
      ],
      "removed": [
  
      ],
      "modified": [
        "index.js"
      ]
    }
  };
const signature = sign(Buffer.from(JSON.stringify(payload)));
// 76c8fd7a876b15670143b02de450e1d3ac6e0145
console.log(signature);


const crypto = require('crypto')
var hmac = crypto.createHmac("sha1", 'GERALDINE');
var calculatedSignature = "sha1=" + hmac.update(JSON.stringify(payload)).digest("hex");

console.log(calculatedSignature) // => sha1=foofoofoo


const branch = 'refs/heads/COR-1830/Nombre-de-la-branch';
const corStr = branch.split('COR-');
const separado = corStr[1].split('/');

console.log(separado[0]);