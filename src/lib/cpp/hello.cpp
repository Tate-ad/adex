#include<node.h>

using namespace v8;

void Method(const FunctionCallbackInfo<Value>& args){
    Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    args.GetReturnValue().Set(String::NewFromUtf8(isolate, "I come from cpp"));
}

void init(Handle<Object> exports){
    NODE_SET_METHOD(exports, "hello", Method);
}


NODE_MODULE(addon, init)
