import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from '../../styles/Matrix.module.css'

function Matrix() {

    const [mstate, msetState] = useState({
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        num6: 0,
        num7: 0,
        num8: 0,
    });

    const onInputchanges = (e: { target: { name: any; value: any; }; }) => {
        msetState({ ...mstate, [e.target.name]: e.target.value });
    }

    const handleReset = (e: any) => {
        msetState({
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            num6: 0,
            num7: 0,
            num8: 0,
        });
    }

    const handleRandom = (e: any) => {
        let min = 1;
        let max = 10;
        let rand = min + (Math.round(Math.random() * (max - min)));
        msetState({
            num1: 0 + rand + 2,
            num2: 0 + rand + 3,
            num3: 0 + rand + 5,
            num4: 0 + rand + 3,
            num5: 0 + rand + 8,
            num6: 0 + rand + 2,
            num7: 0 + rand + 9,
            num8: 0 + rand + 7,
        });
    }

    const a = [[mstate.num1, mstate.num2], [mstate.num3, mstate.num4]];
    const b = [[mstate.num5, mstate.num6], [mstate.num7, mstate.num8]];

    const onSubmitForm = (e: any) => {
        e.preventDefault();
        setOpen(true);
        console.log(m);
    }

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    //For Matrix
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);     // init array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols);  // init the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // init the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }

    return (
        <>
            <form onSubmit={onSubmitForm} >
                <Grid container spacing={2}>
                    <Grid item xs={5} md={5}>
                        <TextField id="num1" label="Array1 num1" variant="filled" name="num1"
                            onChange={onInputchanges} />
                        <TextField id="num2" label="Array1 num2" variant="filled" name="num2"
                            onChange={onInputchanges} />
                    </Grid>
                    <Grid item xs={5} md={5}>
                        <TextField id="num3" label="Array1 num3" variant="filled" name="num3"
                            onChange={onInputchanges} />
                        <TextField id="num4" label="Array1 num4" variant="filled" name="num4"
                            onChange={onInputchanges} />
                    </Grid>
                    <br />
                    <Grid item xs={5} md={5}>
                        <TextField id="num5" label="Array2 num5" variant="filled" name="num5"
                            onChange={onInputchanges} />
                        <TextField id="num6" label="Array2 num6" variant="filled" name="num6"
                            onChange={onInputchanges} />
                    </Grid>
                    <Grid item xs={5} md={5}>
                        <TextField id="num7" label="Array2 num7" variant="filled" name="num7"
                            onChange={onInputchanges} />
                        <TextField id="num8" label="Array2 num8" variant="filled" name="num8"
                            onChange={onInputchanges} />
                    </Grid>
                    <br />
                    <Box className={styles.gpButton}>
                        <Box className={styles.oneButton}>
                            <Button variant="contained" color="primary" type="submit">
                                multiply
                            </Button>
                        </Box>
                        <Box className={styles.oneButton}>
                            <Button variant="contained" color="secondary" type="reset" onClick={handleReset}>
                                Reset
                            </Button>
                        </Box>
                        <Box className={styles.oneButton}>
                            <Button variant="contained" color="default" type="reset" onClick={handleRandom}>
                                Random
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </form>

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Matrix Result"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {
                                m
                            }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            done
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default Matrix;