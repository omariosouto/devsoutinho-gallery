import Text from '../src/components/commons/Text';

const sizes = [
  12,
  14,
  16,
  18,
  //// From text to titles/displays
  20,
  24,
  30,
  36,
  48,
  60,
  72,
]


export default function Typography() {

  return (

    <div>
      <h1>Sizes</h1>
      <p>
        {sizes.map((size) => <span>{size}px - {size / 16}rem<br /></span>)}
      </p>
      <hr />

      <Text as="p" variant="display-1">Display - Extra Bold 60px</Text>
      <hr />
      <Text as="p" variant="heading-1">Heading 1 - Extra Bold 48px(md) - 36px(xs)</Text>
      <Text as="p" variant="heading-2">Heading 2 - Bold 36px(md) - 24px(xs)</Text>
      <Text as="p" variant="heading-3">Heading 3 - Bold 24px(md) - 20px(xs)</Text>
      <Text as="p" variant="heading-4">Heading 4 - Bold 20px(md) - 16px(xs)</Text>
      <Text as="p" variant="heading-5">Heading 5 - Bold 16px(md) - 14px(xs)</Text>
      <Text as="p" variant="heading-6">Heading 6 - Bold 14px(md) - 12px(xs)</Text>
      <hr />
      <Text as="p" variant="body-1" bold>Body 1 - Regular 18px - alt: SemiBold</Text>
      <Text as="p" variant="body-2">Body 2 - Regular 16px - alt: SemiBold</Text>
      <Text as="p" variant="body-3">Body 3 - Regular 14px - alt: SemiBold</Text>
      <Text as="p" variant="body-4">Body 4 - Regular 12px - alt: SemiBold</Text>
    </div>

  )
}