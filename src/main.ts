// typeof
const personName = 'rony';
type PersonName = typeof personName;


// keyof
const person = {
  name: 'rony',
  age: 32,
}
type Person = typeof person;
type PersonProps = keyof typeof person;



// ReturnType
const func = () => {
  const val = 'test';
  return 'test';
}
type Return = ReturnType<typeof func>;

const func2 = async () => {
  const val = 'test';
  return 'test';
}

type Return2 = Awaited<ReturnType<typeof func>>;


// Prettify
interface MainType {
  name: string;
  age: number;
}

type NestedType = MainType & {
  isDeveloper: boolean;
}

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {};
type idk = Prettify<NestedType>;



// Partial
interface Todo {
  title: string;
  description: string;
}

const initialTodo: Todo = {
  title: "Test",
  description: "Testing"
}
const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return {...todo, fieldsToUpdate};
}
updateTodo(initialTodo, { description: "Testing 2" });



// Required
const updateTodo2 = (todo: Todo, fieldsToUpdate: Required<Todo>) => {
  return {...todo, fieldsToUpdate};
}
updateTodo2(initialTodo, { title: 'Test 2', description: "Testing 2" });



// Omit
type Ommited = Omit<Todo, "description">;



// Exclude
type Shapes = 
  | {
      kind: 'circle';
      radius: number;
    }
  | {
      kind: 'square';
      x: number;
    };

type Excluded = Exclude<Shapes, { kind: "square" }>;



// Not nulable keys
// Most used with cva
type Variants = {
  variants?: "default" | "success" | "info" | "danger" | "warning" | null | undefined;
}

type NotNullableKeys<Type> = {
  [Key in keyof Type]-?: NotNullableKeys<NonNullable<Type[Key]>>;
};

const props: { variant: NotNullableKeys<Variants> } = {
  variant: {
    variants: "danger"
  }
}

const variants: { [K in typeof props.variant.variants]: any } = {
  danger: "a",
  default: "a",
  success: "a",
  info: "a",
  warning: "a",
};