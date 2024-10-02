/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val,next){
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    let current = head
    while(current && current.next){
        if(current.val == current.next.val){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
    return head
};

const head = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(deleteDuplicates(head));