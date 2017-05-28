import keyMirror from 'keymirror';

const
	dataSet = id => ({id, type: 'SET'}),

	types = keyMirror({
		DECREASE: null,
		INCREASE: null,
		SET     : null,
		GET     : null,
	})

export default {dataSet, types}
