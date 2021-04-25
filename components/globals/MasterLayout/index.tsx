import { memo } from 'react'
import s from './MasterLayout.module.scss'

function MasterLayout(props) {
	const {children} = props
	return (
	<div>
		<div className={s.appName + ' text-center'}>
			VIRGOTAROT
		</div>
		<div>
			{children}
		</div>
	</div>
	)
}

export default memo(MasterLayout)
