import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-galery',
    standalone: true,
    imports: [],
    templateUrl: './galery.html',
    styleUrl: './galery.css',
})
export class GaleryComponent implements OnDestroy {
    imagenes: string[] = [
        '/assets/barca-cesped.jpg',
        '/assets/biblioteca.jpg',
        '/assets/cabana.jpg',
        '/assets/desierto.jpg',
        '/assets/farolera.jpg',
        '/assets/flores.jpg',
        '/assets/gato.jpg',
        '/assets/hamsters.jpg',
        '/assets/nieve.jpg',
        '/assets/templo-cielo.jpg',
    ];

    // Variables de estado
    currentIndex: number = 0; // Empezar en la primera imagen (índice 0)
    isPlaying: boolean = false; // Controla si el reproductor está en marcha
    intervalId: any; // Guarda el ID del temporizador para poder pararlo
    anchoImagen: number = 500; // Ancho inicial en píxeles para el zoom

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnDestroy(): void {
        this.stop;
    }

    // --- MÉTODOS DE LA LISTA Y NAVEGACIÓN ---

    seleccionarImagen(index: number) {
        this.currentIndex = index;
    }

    siguiente() {
        if (this.currentIndex < this.imagenes.length - 1) {
            this.currentIndex++;
        }
    }

    anterior() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    // --- MÉTODOS DE ZOOM ---

    aumentar() {
        this.anchoImagen += 50; // Suma 50px
    }

    disminuir() {
        if (this.anchoImagen > 100) {
            // Ponemos un límite para que no desaparezca
            this.anchoImagen -= 50;
        }
    }

    // --- MÉTODOS DEL REPRODUCTOR ---

    play() {
        if (this.isPlaying) return; // Si ya está sonando, no hacemos nada

        this.isPlaying = true;

        // setInterval ejecuta una función cada X milisegundos (2000ms = 2s)
        this.intervalId = setInterval(() => {
            if (this.currentIndex === this.imagenes.length - 1) {
                this.currentIndex = 0; // Si es la última, volveuelve a la primera
            } else {
                this.currentIndex++; // Si no, pasa a la siguiente
            }
            this.cdr.detectChanges();
        }, 2000);
    }

    stop() {
        this.isPlaying = false;
        if (this.intervalId) {
            clearInterval(this.intervalId); // Destruye el temporizador
        }
    }
}
