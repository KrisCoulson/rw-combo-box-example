// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ComboBox {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ComboBox from './ComboBox'

export const generated = () => {
  return <ComboBox />
}

export default {
  title: 'Components/ComboBox',
  component: ComboBox,
}
