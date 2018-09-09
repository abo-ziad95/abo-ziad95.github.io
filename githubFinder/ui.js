class UI {
	constructor(){
		this.profile = document.getElementById('user-profile')
	}

	showProfile(user){
		this.profile.innerHTML = `
		<div class="car card-body mb-3">
		<div class="row">
		<div class="col-md-3">
		<img src="${user.avatar_url}" alt="" class="img-fluid mb-2"/>
		<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">view profile</a>
		</div>
		<div class="col-md-12">
		<span class="badge badge-primary">public repose: ${user.public_repos}</span>
		<span class="badge badge-secondary">public gists: ${user.public_gists}</span>
		<span class="badge badge-success">followers: ${user.followers}</span>
		<span class="badge badge-info">following: ${user.following}</span>
		<br><br>
		<ul class="list-group">
		<li class="list-group-item">company: ${user.company}</li>
		<li class="list-group-item">web-site/blog: ${user.blog}</li>
		<li class="list-group-item">Location: ${user.location}</li>
		<li class="list-group-item">member-since: ${user.craeted_at}</li>
		</ul>
		</div>
		</div>
		</div>
		<h3 class="page-heading mb-3">Latest Repos</h3>
		<div class="repos"></div>
		`
	}
}