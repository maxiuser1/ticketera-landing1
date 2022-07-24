<script lang="ts">
	import { auth } from '../../../../firebase';
	import { signOut } from 'firebase/auth';
	import { user, isLoggedIn } from '../../../../stores/userstore';

	function handleClick() {
		alert('test');
	}
</script>

<div class="menu">
	<ul>
		<li>
			<a href="./pub/logout"> Salir </a>
		</li>
	</ul>
</div>

<style>
	.menu {
		min-width: 300px;
		max-width: 300px;
	}
	a {
		color: #fff;
	}
</style>
