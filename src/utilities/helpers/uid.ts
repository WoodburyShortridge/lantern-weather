/**
 * Simple unique ID generator
 *
 * @return uid
 */

const uid = () => {
	const a = new Uint32Array(3)
	window.crypto.getRandomValues(a)
	const nowString = performance.now().toString(36)
	const randomString = Array.from(a).map(A => A.toString(36)).join('')
	return (nowString + randomString).replaceAll('.', '')
}

export {uid}