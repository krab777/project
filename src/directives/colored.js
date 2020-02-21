export default {
	bind(el, bindings) {
		console.log('bind');
		// el.style.color = 'dark-grey'
		const arg = bindings.arg
		el.style[arg] = bindings.value

		const changeFont = bindings.modifiers['font']

		if (changeFont) {
			el.style.fontSize = '14px'
		}		
	},

    // update(el, bindings) {
    //     console.log('update')
    // },

    // componentUpdated(el, bindings, vnode, oldVnode) {
    //     console.log('componentUpdated')
    // },

    // unbind() {
    //     console.log('unbind')
    // },

}

