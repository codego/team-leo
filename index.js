
const { signer } = require('x-hub-signature');
const sign = signer({ algorithm: 'sha1', secret: 'GERALDINE' });
const payload = {
    "action": "synchronize",
    "number": 2,
    "pull_request": {
      "url": "https://api.github.com/repos/codego/team-leo/pulls/2",
      "id": 485918558,
      "node_id": "MDExOlB1bGxSZXF1ZXN0NDg1OTE4NTU4",
      "html_url": "https://github.com/codego/team-leo/pull/2",
      "diff_url": "https://github.com/codego/team-leo/pull/2.diff",
      "patch_url": "https://github.com/codego/team-leo/pull/2.patch",
      "issue_url": "https://api.github.com/repos/codego/team-leo/issues/2",
      "number": 2,
      "state": "open",
      "locked": false,
      "title": "Cor 123/nombre",
      "user": {
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
      "body": "",
      "created_at": "2020-09-12T14:20:04Z",
      "updated_at": "2020-09-12T15:20:30Z",
      "closed_at": null,
      "merged_at": null,
      "merge_commit_sha": "fbceeff290fdca7912d9247be967d8b37a90d2e6",
      "assignee": null,
      "assignees": [
  
      ],
      "requested_reviewers": [
  
      ],
      "requested_teams": [
  
      ],
      "labels": [
  
      ],
      "milestone": null,
      "draft": false,
      "commits_url": "https://api.github.com/repos/codego/team-leo/pulls/2/commits",
      "review_comments_url": "https://api.github.com/repos/codego/team-leo/pulls/2/comments",
      "review_comment_url": "https://api.github.com/repos/codego/team-leo/pulls/comments{/number}",
      "comments_url": "https://api.github.com/repos/codego/team-leo/issues/2/comments",
      "statuses_url": "https://api.github.com/repos/codego/team-leo/statuses/3ac151226fef80e55b6862884bf1cd7b4c581e1a",
      "head": {
        "label": "codego:COR-123/nombre",
        "ref": "COR-123/nombre",
        "sha": "3ac151226fef80e55b6862884bf1cd7b4c581e1a",
        "user": {
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
        "repo": {
          "id": 294952519,
          "node_id": "MDEwOlJlcG9zaXRvcnkyOTQ5NTI1MTk=",
          "name": "team-leo",
          "full_name": "codego/team-leo",
          "private": false,
          "owner": {
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
          "url": "https://api.github.com/repos/codego/team-leo",
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
          "created_at": "2020-09-12T13:47:13Z",
          "updated_at": "2020-09-12T13:57:55Z",
          "pushed_at": "2020-09-12T15:20:30Z",
          "git_url": "git://github.com/codego/team-leo.git",
          "ssh_url": "git@github.com:codego/team-leo.git",
          "clone_url": "https://github.com/codego/team-leo.git",
          "svn_url": "https://github.com/codego/team-leo",
          "homepage": null,
          "size": 1,
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
          "allow_squash_merge": true,
          "allow_merge_commit": true,
          "allow_rebase_merge": true,
          "delete_branch_on_merge": false
        }
      },
      "base": {
        "label": "codego:master",
        "ref": "master",
        "sha": "900ba8ffe928816953c7d89a87dc73e35d623561",
        "user": {
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
        "repo": {
          "id": 294952519,
          "node_id": "MDEwOlJlcG9zaXRvcnkyOTQ5NTI1MTk=",
          "name": "team-leo",
          "full_name": "codego/team-leo",
          "private": false,
          "owner": {
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
          "url": "https://api.github.com/repos/codego/team-leo",
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
          "created_at": "2020-09-12T13:47:13Z",
          "updated_at": "2020-09-12T13:57:55Z",
          "pushed_at": "2020-09-12T15:20:30Z",
          "git_url": "git://github.com/codego/team-leo.git",
          "ssh_url": "git@github.com:codego/team-leo.git",
          "clone_url": "https://github.com/codego/team-leo.git",
          "svn_url": "https://github.com/codego/team-leo",
          "homepage": null,
          "size": 1,
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
          "allow_squash_merge": true,
          "allow_merge_commit": true,
          "allow_rebase_merge": true,
          "delete_branch_on_merge": false
        }
      },
      "_links": {
        "self": {
          "href": "https://api.github.com/repos/codego/team-leo/pulls/2"
        },
        "html": {
          "href": "https://github.com/codego/team-leo/pull/2"
        },
        "issue": {
          "href": "https://api.github.com/repos/codego/team-leo/issues/2"
        },
        "comments": {
          "href": "https://api.github.com/repos/codego/team-leo/issues/2/comments"
        },
        "review_comments": {
          "href": "https://api.github.com/repos/codego/team-leo/pulls/2/comments"
        },
        "review_comment": {
          "href": "https://api.github.com/repos/codego/team-leo/pulls/comments{/number}"
        },
        "commits": {
          "href": "https://api.github.com/repos/codego/team-leo/pulls/2/commits"
        },
        "statuses": {
          "href": "https://api.github.com/repos/codego/team-leo/statuses/3ac151226fef80e55b6862884bf1cd7b4c581e1a"
        }
      },
      "author_association": "OWNER",
      "active_lock_reason": null,
      "merged": false,
      "mergeable": null,
      "rebaseable": null,
      "mergeable_state": "unknown",
      "merged_by": null,
      "comments": 0,
      "review_comments": 0,
      "maintainer_can_modify": false,
      "commits": 6,
      "additions": 443,
      "deletions": 1,
      "changed_files": 3
    },
    "before": "c4d5f3290e946e872c9f07d617bcd5996350aab5",
    "after": "3ac151226fef80e55b6862884bf1cd7b4c581e1a",
    "repository": {
      "id": 294952519,
      "node_id": "MDEwOlJlcG9zaXRvcnkyOTQ5NTI1MTk=",
      "name": "team-leo",
      "full_name": "codego/team-leo",
      "private": false,
      "owner": {
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
      "url": "https://api.github.com/repos/codego/team-leo",
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
      "created_at": "2020-09-12T13:47:13Z",
      "updated_at": "2020-09-12T13:57:55Z",
      "pushed_at": "2020-09-12T15:20:30Z",
      "git_url": "git://github.com/codego/team-leo.git",
      "ssh_url": "git@github.com:codego/team-leo.git",
      "clone_url": "https://github.com/codego/team-leo.git",
      "svn_url": "https://github.com/codego/team-leo",
      "homepage": null,
      "size": 1,
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
      "default_branch": "master"
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
    }
  };

// console.log(JSON.stringify(payload))


const signature = sign(Buffer.from(JSON.stringify(payload)));
// sha1=8dd6e74261e58a686b18285faa28f861e3e2ea16
// console.log(signature);


const crypto = require('crypto')
var hmac = crypto.createHmac("sha1", 'GERALDINE');
var calculatedSignature = "sha1=" + hmac.update(JSON.stringify(payload)).digest("hex");

console.log(calculatedSignature) // => sha1=foofoofoo


const branch = 'refs/heads/COR-1830/Nombre-de-la-branch';
const corStr = branch.split('COR-');
const separado = corStr[1].split('/');

console.log(separado[0]);
