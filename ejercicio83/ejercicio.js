function piramide(niveles) {
    for (let i = 1; i <= niveles; i++) {
      console.log(' '.repeat(niveles - i) + '*'.repeat(2 * i - 1));
    }
}
piramide(6);