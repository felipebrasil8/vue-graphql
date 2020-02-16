import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('called function when mounted', () => {
    
    const novo = jest.fn()
		mount(App,{
			methods: {
				novo
			}
		})

    expect(novo).toBeCalled()
  })

  it('valid data prexs value when mounted', () => {
		const wrapper = mount(App)

		expect(wrapper.vm.prexs.length).toEqual(4)
  })
})
