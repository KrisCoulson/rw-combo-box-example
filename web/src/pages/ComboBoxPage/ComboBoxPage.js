import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ComboBox from 'src/components/ComboBox/ComboBox'

const ComboBoxPage = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <ComboBox />
    </div>
  )
}

export default ComboBoxPage
