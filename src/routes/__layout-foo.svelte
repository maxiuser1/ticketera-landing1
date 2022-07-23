<script lang="ts">
	import { user, isLoggedIn } from '../stores/userstore';
	import { auth } from '../firebase';
	import { onAuthStateChanged } from 'firebase/auth';

	onAuthStateChanged(auth, (authUser) => {
		user.set(authUser);
		isLoggedIn.set(!!authUser);
	});
</script>

<slot />
