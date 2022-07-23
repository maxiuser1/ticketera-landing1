<script lang="ts">
	import { auth } from '../../firebase';
	import { signOut } from 'firebase/auth';

	signOut(auth).then(() => {
		document.location.href = '/';
	});
</script>
