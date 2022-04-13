class Queue {
    constructor(){
        this.item = [];
        this.count = 0;

    }
    enqueue(element) { /* add element to queue, similar to Array.prototype.push */ 
        this.item[this.count] = element;
        console.log(`${element} add to ${this.count}`);
        this.count ++;
        return this.count-1;
    }
    peek() { /* get the head element*/
        if(this.count >0){
            return this.item[0]
        }else{
            return undefined;
        }

     }
    dequeue() { /* remove the head element, similar to Array.prototype.pop */
        if(this.count >0){
            let deleteItem = this.item[0]
            this.count --;
            let i = 0;
            //[1(0),2(1),3(2),4(3)]4 => [2(0),3(1),4(2)] 3
            while ( i < this.count) {
                this.item[i] = this.item[i+1]; 
                i++;
            }
            console.log(`${deleteItem} has been removed`);
            return deleteItem;
        }else{
            console.log("empty");
            return undefined;
        }
     }
    size() { /* count of elements */ 
        return this.count;
    }
  }

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue()
queue.dequeue()
queue.dequeue()


class Stack {
    push(element) { /* add element to stack */ }
    peek() { /* get the top element */ }
    pop() { /* remove the top element */}
    size() { /* count of elements */}
  }
  //1,2,3,4 push 
  //4,3,2,1  pop stack push( push stack pop)
  // 4, 3, 2 pop stack pop
  // 2, 3, 4 push stack push pop stack

class Queue {
    constructor(){
        this.stack = new Stack();
    }

    enqueue(element) { /* add element to queue, similar to Array.prototype.push */ 
        this.stack.push(element);
    }
    
    peek() { /* get the head element*/
        if(this.stack.size() >0){
            let reverStack = this._reverse(this.stack)
            return reverStac.peek();
        }else{
            return undefined;
        }
    }
    dequeue() { /* remove the head element, similar to Array.prototype.pop */
        if(this.stack.size() >0){
            let reverStack = this._reverse(this.stack);
            let deleteItem = reverStack.pop();
            this.stack = this._reverse(reverStack); 
            return deleteItem;
        }else{
            return undefined;
        }
     }
     size() { /* count of elements */ 
        return this.stack.size();
    }

    _reverse(){
        let tempStack = new Stack();
        while(this.stack.size()>0){
            tempStack.push(this.stack.pop());
        }
        return tempStack;
    }

    }


