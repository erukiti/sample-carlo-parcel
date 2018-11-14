const render = async () => {
  const root = document.getElementById('root')
  root.textContent = await (window as any).cwd()
}

render()
