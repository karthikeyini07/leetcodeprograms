var compose = function(functions) {
    n=functions.length;
    return function(x) {
        if(n==0)
        {
            return x;
        }
        else
        {
            res =x;
            for(let i=n-1;i>=0;i--){
                res=functions[i](res);
            }
            return res;
        }
    }
};
