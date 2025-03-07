import styles from './index.module.css'
import { Heading, FormInput, Button } from '@/components/ui'

export default function LoginForm({ headingLevel = 1 }) {
    return (
        <section className={styles.section}>
            <Heading level={headingLevel}>Iniciar Sesión</Heading>
            <form>
                <FormInput label='Usuario:' />
                <FormInput label='Contraseña:' type='password' />
                <Button type='submit'>Ingresar</Button>
            </form>
        </section>
    )
}
