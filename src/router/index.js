import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About'
import DataBinding from "@/views/DataBinding";
import DataBindingHtml from "@/views/DataBindingHtml";
import DataBindingInputText from "@/views/DataBindingInputText";
import DataBindingInputNumber from "@/views/DataBindingInputNumber";
import Textarea from "@/views/Textarea";
import DataBindingSelect from "@/views/DataBindingSelect";
import DataBindingCheckbox from "@/views/DataBindingCheckbox";
import DataBindingRadio from "@/views/DataBindingRadio";
import DataBindingAttribute from "@/views/DataBindingAttribute";
import DataBindingButton from "@/views/DataBindingButton";
import DataBindingClass from "@/views/DataBindingClass";
import DataBindingClass2 from "@/views/DataBindingClass2";
import DataBindingStyle from "@/views/DataBindingStyle";
import DataBindingList from "@/views/DataBindingList";
import DataBindingVif from "@/views/DataBindingVif";
import EventClick from "@/views/EventClick";
import EventChange from "@/views/EventChange";
import Computed from "@/views/Computed";
import Watch2 from "@/views/Watch2";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/textarea',
    component: Textarea
  },
  {
    path: '/databindingselect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingradio',
    component: DataBindingRadio
  },
  {
    path: '/databindingattribute',
    component: DataBindingAttribute
  },
  {
    path: '/databindingbutton',
    component: DataBindingButton
  },
  {
    path:'/databindingclass',
    component: DataBindingClass
  },
  {
    path:'/databindingclass2',
    component: DataBindingClass2
  },
  {
    path: '/databindingstyle',
    component: DataBindingStyle
  },
  {
    path: '/databindinglist',
    component: DataBindingList
  },
  {
    path: '/databindingvif',
    component: DataBindingVif
  },
  {
    path: '/eventclick',
    component: EventClick
  },
  {
    path:'/eventchange',
    component: EventChange
  },
  {
    path:'/computed',
    component: Computed
  },
  {
    path:'/watch2',
    component: Watch2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router