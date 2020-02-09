import Vue from 'vue';
import Router from 'vue-router';

import HomeView from './viws/HomeView';
import SelectedItemsView  from './viws/SelectedItemsView';
import SelectItemsView  from './viws/SelectItemsView';
import MergeComponentView  from './viws/MergeComponentView';
import CreateDataWarehouseView  from './viws/CreateDataWarehouseView';


Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'HomeView',
            meta: {
                title: 'Глввная',
            },
            component: HomeView
        },
        {
            path: '/selected-items',
            name: 'SelectedItemsView',
            meta: {
                title: 'Компонент отображения выбранных элементов',
            },
            component: SelectedItemsView
        },
        {
            path: '/select-items',
            name: 'SelectItemsView',
            meta: {
                title: 'Компонент выбора элементов',
            },
            component: SelectItemsView
        },
        {
            path: '/merge-components',
            name: 'MergeComponentView',
            meta: {
                title: 'Объединение компонентов SelectItems и SelectedItems',
            },
            component: MergeComponentView
        },
        {
            path: '/create-data-warehouse',
            name: 'CreateDataWarehouseView',
            meta: {
                title: 'Создание нового хранилища данных',
            },
            component: CreateDataWarehouseView
        },
    ],
    mode: `history`,

});


export default router;
