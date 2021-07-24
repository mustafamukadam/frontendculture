import { postorderTraverse, inorderTraverse, preorderTraverse } from '../DFS';
import tree from 'data/numberTree'
// import tree from '../../../../data/numberTree'

describe('DFS', () => {
    it('preorder Traversel', () => {
        expect(preorderTraverse(tree, [])).toStrictEqual([8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11]);
    });
    it('inorder Traversel', () => {
        expect(inorderTraverse(tree, [])).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
    it('postorder Traversel', () => {
        expect(postorderTraverse(tree, [])).toStrictEqual([2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8]);
    });
});
