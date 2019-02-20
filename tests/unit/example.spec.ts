// // import { mount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';
// import Vuetify from 'vuetify'


// xdescribe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

// import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
// // import { mount } from '@vue/test-utils';
// // eslint-disable-next-line import/no-unresolved
// import HelloWorld from '@/components/HelloWorld.vue';
// import Vuetify from 'vuetify'
// xdescribe('HelloWorld.vue', () => {

//   let localVue;
//   let wrapper;
//   beforeAll(() => {
//     localVue = createLocalVue();
//     localVue.use(Vuetify, {});
//     wrapper = mount(HelloWorld, { localVue });
//   });

//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     wrapper.setProps({ msg });
//     expect(wrapper.html()).toMatch(msg);
//     expect(wrapper.props().msg).toMatch(msg);
//   });


//   it('render props.author when passed', () => {
//     const msg = 'new message';

//     wrapper.setProps({ author: msg });
//     expect(wrapper.html()).toMatch(msg);
//     expect(wrapper.props().author).toMatch(msg);
//   });
// });

import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

describe('HelloWorld.vue', () => {

  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify';
    const wrapper = shallowMount(HelloWorld, {
      // propsData: { msg },
    });
    expect(wrapper.text()).toContain(msg);
  });
});
