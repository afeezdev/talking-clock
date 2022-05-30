let dbMock = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
]
test('the shopping list has milk on it', () => {
    expect(dbMock).toContain('two');
    expect(new Set(dbMock)).toContain('');
})