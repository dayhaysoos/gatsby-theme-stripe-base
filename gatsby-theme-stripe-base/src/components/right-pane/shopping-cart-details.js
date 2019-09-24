/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useCart } from '../../context/shopping-cart'
import SkuImage from '../sku-list/sku-image'
import { FaWindowClose } from 'react-icons/fa'
import { Formik, FieldArray, Field, Form } from 'formik'
import * as Yup from 'yup'

const ShoppingCartDetails = () => {
  const {
    detailedCart,
    total,
    deleteItem,
    handleQuantityChange,
    redirectToCheckout,
  } = useCart()

  const updateInputValue = (e, skuID) => {
    const { value } = e.target
    parseInt(value) === 0
      ? deleteItem(skuID)
      : handleQuantityChange(parseInt(value), skuID)
  }

  const handleSubmit = async ({ items }) => {
    await items.forEach(item =>
      item.quantity === 0 ? deleteItem(item.sku) : null
    )

    redirectToCheckout('auto')
  }

  return (
    <>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '10px',
          borderBottom: '1px solid gray',
        }}
      >
        <span css={{ fontSize: '12px' }}>Product</span>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '150px',
          }}
        >
          <span css={{ fontSize: '12px' }}>Qty</span>
          <span css={{ fontSize: '12px' }}>Remove</span>
        </div>
      </div>
      <Formik
        initialValues={{ items: detailedCart }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validationSchema={Yup.object().shape({
          items: Yup.array()
            .of(
              Yup.object().shape({
                quantity: Yup.number().required('Required'),
              })
            )
            .required(`You're making a mistake`),
        })}
        render={({ values, errors }) => (
          <Form>
            <FieldArray
              name={'items'}
              render={() => (
                <div>
                  {values.items && values.items.length > 0 ? (
                    values.items.map(
                      ({ quantity, name, price, image, sku }) => (
                        <section
                          key={sku}
                          css={{
                            listStyle: 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingLeft: '10px',
                            borderBottom: '1px dotted lightgray',
                          }}
                        >
                          <div
                            css={{
                              display: 'flex',
                              width: '100%',
                            }}
                          >
                            <SkuImage size={40} name={name} image={image} />
                            <p css={{ fontSize: '14px', marginLeft: '20px' }}>
                              {name}
                            </p>
                            <p css={{ fontSize: '14px', marginLeft: '20px' }}>
                              {price}
                            </p>
                          </div>
                          <div
                            css={{
                              display: 'flex',
                              flexDirection: 'row',
                            }}
                          >
                            <Field
                              sx={{ variant: 'field.checkout' }}
                              type="number"
                              placeholder={'Enter Amount'}
                              name={name}
                              onChange={e => updateInputValue(e, sku)}
                              value={quantity}
                              min={0}
                              css={{
                                width: '30px',
                                textAlign: 'center',
                              }}
                            />
                            <button
                              type="submit"
                              onClick={() => deleteItem(sku)}
                              sx={{ variant: 'button.checkout.closeWindow' }}
                            >
                              <FaWindowClose size={30} />
                            </button>
                          </div>
                        </section>
                      )
                    )
                  ) : (
                    <h1>No cart items. Sad Reacts only</h1>
                  )}
                </div>
              )}
            />
          </Form>
        )}
      />
      <span css={{ textAlign: 'center' }}>{total}</span>
    </>
  )
}

export default ShoppingCartDetails
