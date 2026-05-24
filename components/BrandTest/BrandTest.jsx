function BrandTest({ text = 'Brand Text Test' }) {
  return (
    <div style={{ backgroundColor: '#005e70', borderRadius: '8px', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '72px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-2.88px', color: '#f0f7f8', margin: 0, whiteSpace: 'nowrap' }}>
        {text}
      </p>
    </div>
  )
}

export default BrandTest
