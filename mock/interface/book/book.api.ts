import { bookEntityTemp } from '../../database/book/book.data';
import * as Mock from 'mockjs';

export const bookStart = () => {
    console.group('book 测试数据加载中...');
    Mock.mock('getBooKByPage', bookEntityTemp);
    console.log('book 测试数据加载中...');
    console.groupEnd();
};
