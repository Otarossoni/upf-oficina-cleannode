{
  class Example {
    public objectExample = {
      name: 'UPF',
    }

    public fibonacci(n: number): number {
      if (n <= 0) {
        return 0
      } else if (n === 1) {
        return 1
      } else {
        return this.fibonacci(n - 1) + this.fibonacci(n - 2)
      }
    }
  }

  const example = new Example()
  console.log(example.fibonacci(15))
}
