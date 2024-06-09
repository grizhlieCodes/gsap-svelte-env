import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, ScrollSmoother);

function createSmootherStore() {
	let smoother = $state(null);

	function setNewSmoother() {
		if (typeof window !== 'undefined') {
			smoother = ScrollSmoother.create({
				smooth: 2,
				normalizeScroll: false,
				ignoreMobileResize: false,
				effects: false
			});
		}

		// console.log(smoother);
	}

	function setSmoother(newSmoother) {
		smoother = newSmoother;
	}

	function pauseSmoother() {
		smoother.paused(true);
	}

	function resumeSmoother() {
		smoother.paused(false);
	}

	function killSmoother() {
		smoother.kill();
		smoother = null;
	}

	function scrollToSmoothly(target) {
		smoother.scrollTo(target, true, 'top');
	}

	function refreshAll() {
		killSmoother();
		setNewSmoother();
		refreshScrollTrigger();
	}

	function refreshScrollTrigger() {
		// ScrollTrigger.killAll();
		// ScrollTrigger.getAll().forEach((trigger) => {
		// 	console.log('before', trigger.trigger);
		// });
		ScrollTrigger.refresh();
		console.log(ScrollTrigger.isActive);
	}

	function consoleSmoother() {
		console.log(smoother);
		console.log(smoother.effects());
	}

	return {
		get smoother() {
			return smoother;
		},
		setNewSmoother,
		pauseSmoother,
		resumeSmoother,
		killSmoother,
		scrollToSmoothly,
		refreshAll,
		refreshScrollTrigger,
		consoleSmoother,
		setSmoother
	};
}

const smoother = createSmootherStore();

export { gsap, ScrollTrigger, SplitText, ScrollSmoother, smoother };
