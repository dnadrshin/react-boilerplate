import keyMirror from 'keymirror';

const
	dataSet = id => ({type: "SET", id}),

	types = keyMirror({
		SET     : null,
		INCREASE: null,
		DECREASE: null
	})

export default {dataSet, types}
