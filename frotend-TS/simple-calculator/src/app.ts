let input: string = '';


function appendToInput(value: string): void{
      input += value;
      // console.log(input);
      
     const inputField = document.getElementById('input') as HTMLInputElement;
     inputField.value = input;

}

function clearInput(): void{
      input = '';
      const inputField = document.getElementById('input') as HTMLInputElement;
      inputField.value = '';
}

function calculate(): void{
      try {
            const result = eval(input);
           const inputField = document.getElementById('input') as HTMLInputElement;
           inputField.value = result.toString();
           input = result.toString();
      } catch (error) {
         const inputField = document.getElementById('input') as HTMLInputElement;
         inputField.value = 'Error';
         input = '';
      }
}

function removeLastCharacter(): void{
      input = input.slice(0,-1)
      console.log(input);
      const inputField = document.getElementById('input') as HTMLInputElement;
      inputField.value = input;
      
}