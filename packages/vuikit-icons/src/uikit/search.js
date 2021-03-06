// icon-search
export default {
  functional: true,
  render: function (h, { props }) {
    let width = props.width || 20
    let height = props.height || 20
    const viewBox = props.viewBox || '0 0 20 20'

    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-search',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7" /><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z" />'
      }
    })
  }
}
