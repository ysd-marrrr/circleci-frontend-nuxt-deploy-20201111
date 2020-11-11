import { mount } from '@vue/test-utils'
import Maps from '@/components/Maps.vue'

describe('Maps', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Maps)
    expect(wrapper.vm).toBeTruthy()
  })
})
