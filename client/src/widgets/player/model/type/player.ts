export interface VideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void
	mozRequestFullscreen?: () => void
	webkitRequestFullscreen?: () => void
}
